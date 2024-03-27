
const useInsertNode = () => {

    const insertNode = (tree, folderID, item, isFolder) => {
        if (tree.id === folderID) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: []
            })
            return tree;
        }

        let latestNode = tree.items.map(obj => {
            return insertNode(obj, folderID, item, isFolder)
        });

        return { ...tree, items: latestNode };

    }

    return { insertNode }

}

export default useInsertNode