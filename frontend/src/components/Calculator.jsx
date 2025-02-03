import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Prevent accessibility issues

const Calculator = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="p-6">
      <button onClick={() => setModalIsOpen(true)} className="px-4 py-2 bg-primary text-white rounded-full">
        Calculate Price Now
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-w-lg mx-auto"
        overlayClassName="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-xl font-bold">Let's Calculate the Price</h2>
        <p>This is a modal using react-modal.</p>
        <button onClick={() => setModalIsOpen(false)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
          X
        </button>
      </Modal>
    </div>
  );
};

export default Calculator;
