Open PowerShell as administrator. Then use
`cd $home\Desktop\Blog\the-roman-forum`

For full help options, you can run `npx quartz sync --help`.

- `-d` or `--directory`: the content folder. This is normally just `content`
- `-v` or `--verbose`: print out extra logging information
- `--commit` or `--no-commit`: whether to make a `git` commit for your changes
- `--push` or `--no-push`: whether to push updates to your GitHub fork of Quartz
- `--pull` or `--no-pull`: whether to try and pull in any updates from your GitHub fork (i.e. from other devices) before pushing