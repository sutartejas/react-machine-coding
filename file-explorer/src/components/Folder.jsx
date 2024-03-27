import { useState } from "react";


const Folder = ({ explorerData, handleInsertNode }) => {
    
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    })

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation()
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }
    const handleNewFile = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const onAddNewFolder = (e, explorer) => {
        if (e.keyCode == 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder)
            setShowInput({
                ...showInput,
                visible: false
            })
        }

    }

    if (explorerData.isFolder) {
        return <div style={{ marginTop: '5px' }}><div className="folder" onClick={() => setExpand(!expand)}>
            <span>📁{explorerData.name}</span>
            <div>
                <button onClick={e => handleNewFolder(e, true)}>Folder +</button>
                <button onClick={e => handleNewFile(e, false)}>File +</button>
            </div>
            <div style={{ 'display': expand ? 'block' : 'none', paddingLeft: '20px' }}>
                {showInput.visible && <div className="input_container">
                    <span>{showInput.isFolder ? '📁' : '📝'}</span>
                    <input
                        type='text'
                        autoFocus
                        onKeyDown={(e) => onAddNewFolder(e, explorerData)}
                        onBlur={() => setShowInput({ ...showInput, visible: false })}
                        className="input" />
                </div>}
                {explorerData.items.map((exp) => {
                    return <Folder handleInsertNode={handleInsertNode} explorerData={exp} key={exp.id} />
                })}
            </div>
        </div></div>
    } else {
        return <span className="file">📝{explorerData.name}</span>
    }

}

export default Folder