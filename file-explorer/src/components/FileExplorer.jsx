import { useState } from "react";
import Folder from "./Folder";
import useInsertNode from '../useInsertNode'

const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [
                {
                    id: "3",
                    name: "public nested 1",
                    isFolder: true,
                    items: [
                        {
                            id: "4",
                            name: "index.html",
                            isFolder: false,
                            items: []
                        },
                        {
                            id: "5",
                            name: "hello.html",
                            isFolder: false,
                            items: []
                        }
                    ]
                },
                {
                    id: "6",
                    name: "public_nested_file",
                    isFolder: false,
                    items: []
                }
            ]
        }
    ]
};


const FileExplorer = () => {
    const [explorerData, setExplorerData] = useState(explorer);
    const { insertNode } = useInsertNode()

    const handleInsertNode = (folderID, item, isFolder) =>{
        const finalTree = insertNode(explorerData, folderID, item, isFolder);
        setExplorerData(finalTree)
    }

    console.log(explorerData,"ABCS")

    return <Folder handleInsertNode={handleInsertNode} explorerData={explorerData} />

}


export default FileExplorer;


