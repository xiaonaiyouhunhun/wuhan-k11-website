import requests
import sys

def create_github_repo(token, repo_name="wuhan-k11-website", description="武汉K11企业网站"):
    """
    使用GitHub API创建仓库
    """
    api_url = "https://api.github.com/user/repos"

    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }

    data = {
        "name": repo_name,
        "description": description,
        "private": False,
        "auto_init": False
    }

    try:
        response = requests.post(api_url, headers=headers, json=data)

        if response.status_code == 201:
            repo_data = response.json()
            print(f"✅ 仓库创建成功!")
            print(f"📍 仓库地址: {repo_data['html_url']}")
            print(f"🔗 Git URL: {repo_data['clone_url']}")
            return repo_data
        else:
            print(f"❌ 创建失败: {response.status_code}")
            print(response.text)
            return None

    except Exception as e:
        print(f"❌ 错误: {str(e)}")
        return None

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("使用方法: python create_github_repo.py <your_github_token>")
        sys.exit(1)

    token = sys.argv[1]
    create_github_repo(token)
