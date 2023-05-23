set dotenv-load

default:
    @just --list

git-push:
    ssh-agent bash -c 'ssh-add ~/.ssh/id_ed25519_khoj; git push origin main'

