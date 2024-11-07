import React from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    imageUrl: string;
    altText: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrl, altText }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="max-w-3xl p-4 mx-auto bg-white rounded-lg"
                style={{
                    backgroundImage:
                        'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--accent)), hsl(var(--background)) 60%),' +
                        'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                }}>
                <img src={imageUrl} alt={altText} className="max-w-full max-h-full" />
                <button onClick={onRequestClose} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">
                    Close
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
