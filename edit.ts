import fs from 'fs'
import path from 'path'

const getRecentUpdatedFiles = async (
  dir: string,
  limit: number = 5
): Promise<string[]> => {
  const getFiles = (dirPath: string): string[] => {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    const files = entries
      .filter((fileDirent) => fileDirent.isFile())
      .map((fileDirent) => path.join(dirPath, fileDirent.name))

    const folders = entries.filter((folderDirent) => folderDirent.isDirectory())

    for (const folder of folders) {
      files.push(...getFiles(path.join(dirPath, folder.name)))
    }

    return files
  }

  const allFiles = getFiles(dir)
  const sortedFiles = allFiles.sort((a, b) => {
    return fs.statSync(b).mtime.getTime() - fs.statSync(a).mtime.getTime()
  })

  return sortedFiles.slice(0, limit)
}

// 使用例
getRecentUpdatedFiles('./articles').then((files) => {
  console.log(files)
})
