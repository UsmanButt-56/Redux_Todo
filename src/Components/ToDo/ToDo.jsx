import React, {useState} from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useSelector , useDispatch } from "react-redux";
import { Remove , Edit } from "../Redux/Action/Action";
import { useContext } from "react";
import { DeleteContext } from "../Context/ContextProvider";

function ToDo() {
  const dispatch = useDispatch();
  const getdata = useSelector((state) => state.Add.item);
  console.log("Info is: ", getdata);

  const [isOpen, setIsOpen] = useState(false);
  const [eyeValue , setEyeValue] = useState("");
  const [update ,setUpdate] = useState(false);
  const [data ,setData] = useState("");
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const {dlttask ,setDlttask} = useContext(DeleteContext);
  
  const deleted = (id) =>
  {
    dispatch(Remove(id));
    setDlttask(true);
  }

  const openEditModal = (element, index) => {
    setUpdate(true);
    setData(element);
    setCurrentIndex(index);
  };

  const closeEditModal = () => {
    setUpdate(false);
    setData("");
    setCurrentIndex(null);
  };

  const saveUpdate = () => {
    if (data.trim()) {
      dispatch(Edit(data, currentIndex));
      closeEditModal();
    } else {
      alert("Input cannot be empty!");
    }
  };
  return (
    <div className="w-11/12 mx-auto bg-white">
      <div className="w-full flex flex-wrap justify-center">
        {getdata.map((element, index) => (
          <div
            className="w-[500px] h-[40px] bg-[#DADCE0] flex justify-between items-center px-2 my-1"
            key={index}
          >
            <div className="font-medium">{element}</div>
            <div className="flex gap-2 md:gap-4 cursor-pointer">
              <MdEdit size={24} color="blue" onClick={() => openEditModal(element, index)} />
              <MdDelete size={24} color="red" onClick={() => deleted(index)}/>
              <FaEye size={24} color="green" onClick={() => { openModal(); setEyeValue(element) }} />
            </div>
          </div>
        ))}
      </div>
      {/* Eye Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {eyeValue}
            </h2>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {update && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            
            <input
              type="text"
              className="w-full h-full px-3"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={saveUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default ToDo;