"use client";
import React, { useCallback, useEffect, useState } from "react";
import { MdDisabledByDefault } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disable?: boolean;
  secondaryAction?: () => void;
  secondayLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disable,
  secondaryAction,
  secondayLabel: secondaryActionLable,
}) => {
  const [showModal, setShowModal] = useState(isOpen);
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disable) {
      return;
    }

    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [disable, onClose]);

  const handleSubmit = useCallback(() => {
    if (disable) {
      return;
    }
    onSubmit();
  }, [disable, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disable || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disable, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-800/70 overflow-x-hidden overflow-y-auto">
      <div className="relative w-full max-w-xl mx-auto h-auto">
        <div
          className={`transform duration-300 ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
        >
          <div className="relative flex flex-col w-full bg-white rounded-lg shadow-lg outline-none focus:outline-none">
            {/* HEADER */}
            <div className="flex items-center p-6 border-b rounded-t">
              <button
                onClick={handleClose}
                className="absolute left-4 p-1 border-0 hover:opacity-70 transition"
              >
                <IoMdClose size={18} />
              </button>
              <div className="mx-auto text-sm font-semibold">{title}</div>
            </div>
            {/* BODY */}
            <div className="relative p-6 flex-auto max-h-[70vh] overflow-y-auto">
              {body}
            </div>
            {/* FOOTER */}
            <div className="flex flex-col gap-1 p-3">
              <div className="flex flex-row items-center gap-4 w-full">
                {secondaryAction && secondaryActionLable && (
                  <Button
                    disabled={disable}
                    onClick={handleSecondaryAction}
                    className="w-full"
                    variant="outline"
                  >
                    {secondaryActionLable}
                  </Button>
                )}
                <Button
                  disabled={disable}
                  onClick={handleSubmit}
                  className="w-full"
                  variant="default"
                >
                  {actionLabel}
                </Button>
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
