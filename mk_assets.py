import os

def generate_qin_assets(assets_dir, output_file):
    file_names = sorted([f for f in os.listdir(assets_dir) if os.path.isfile(os.path.join(assets_dir, f))])

    enum_members = []
    for file_name in file_names:
        name_without_ext = os.path.splitext(file_name)[0]
        enum_key = "".join(word.capitalize() for word in name_without_ext.replace('-', ' ').split()).replace(' ', '')
        enum_members.append(f"    {enum_key} = \"{file_name}\",")

    ts_content = f"""export enum QinAsset {{
{chr(10).join(enum_members)}
}}

export function qinAssetUrl(asset: QinAsset): string {{
    return "/pub/qin_desk/assets/" + asset;
}}

export function qinUrlAsset(url: string): QinAsset {{
    const asset = url.substring(url.lastIndexOf("/") + 1);
    return asset as QinAsset;
}}
"""
    output_dir = os.path.dirname(output_file)
    os.makedirs(output_dir, exist_ok=True)
    with open(output_file, "w") as f:
        f.write(ts_content)

if __name__ == "__main__" or __name__ == "builder":
    assets_directory = "../qin_desk/public/assets"
    output_typescript_file = "src/qin-assets.ts"
    generate_qin_assets(assets_directory, output_typescript_file)