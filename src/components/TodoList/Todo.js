import React, { useEffect, useState } from 'react'
import image from "./textbook.jpg";
import "./style.css";

const getLocalData = () => {
    const list = localStorage.getItem("mytodolist");
    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}
const Todo = () => {
    const [inputData, setInputDate] = useState("");
    const [item, setItem] = useState(getLocalData());
    const [editItems, setEditItems] = useState("");
    const [btnStutas, setBtnStatus] = useState(false);

    // Add items 
    const addItem = () => {
        if (!inputData) {
            alert("Please Enter data first");
        }
        else if (inputData && btnStutas) {
            setItem(
                item.map((curElmn) => {
                    if (curElmn.id === editItems) {
                        return { ...curElmn, name: inputData }
                        // console.log("ok");
                    }
                    return curElmn;
                })
            );
            setInputDate("");
            setEditItems(null);
            setBtnStatus(false);
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItem([...item, newInputData]);
            setInputDate("");
        }

    }
    // edit items
    const editItem = (eIndex) => {
        const filterEditItem = item.find((cr) => {
            return cr.id === eIndex;
        })
        setInputDate(filterEditItem.name);
        setEditItems(eIndex);
        setBtnStatus(true);
    }
    // store date in local storage
    useEffect(() => {
        // alert("every thing ok");
        localStorage.setItem("mytodolist", JSON.stringify(item));
    }, [item])

    // delete items 
    const deletItem = (dIndex) => {
        const filterItem = item.filter((cr) => {
            return cr.id !== dIndex;
        })
        setItem(filterItem);
    }

    return (
        <>
            <div className="container">
                <div className="img-body">
                    <img src={image} alt="" />
                </div>
                <div className="inputArea subtle">
                    <input type="text" className='inputBox' name='input'
                        value={inputData}
                        onChange={(e) => setInputDate(e.target.value)} placeholder='✍ Write Here...' />
                    {
                        (!btnStutas ? <i className="fa fa-plus icons" aria-hidden="true" onClick={addItem}></i> : <i className="fa fa-pencil-square icons edit" aria-hidden="true" onClick={addItem}></i>)
                    }

                </div>

                <div className="items-container subtle">

                    {
                        item.map((currentElmnt) => {
                            return (
                                <>
                                    <div className="items subtle" key={currentElmnt.id}>
                                        <div className="item">
                                            <h2>{currentElmnt.name}</h2>
                                        </div>
                                        <div className="btn-icons subtle">
                                            <i className="fa fa-pencil-square icons edit" aria-hidden="true"
                                                onClick={() => editItem(currentElmnt.id)}></i>
                                            <i className="fa fa-trash icons delet" aria-hidden="true"
                                                onClick={() => deletItem(currentElmnt.id)}></i>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Todo
