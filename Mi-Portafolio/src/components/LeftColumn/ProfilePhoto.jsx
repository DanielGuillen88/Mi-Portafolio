import { useState } from 'react';
import { photo0, photo1, photo2, photo3, photo4, photo5, photo6, photo7 } from '../../img';
export default function ProfilePhoto() {
    // 1 lista de fotos
    const photos = [
        photo0,
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7
    ];

    // 2 empezamos con la foto 0
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // 3 recoge el clic del usuario
    const handlePhotoClick = () => {
        // pone la siguiente foto
        const nextIndex = (currentPhotoIndex + 1) % photos.length;
        setCurrentPhotoIndex(nextIndex); // actualiza foto
    };

    return (

        <img
            src={photos[currentPhotoIndex]}
            alt="Foto de perfil"
            className="w-48 h-48 rounded-full object-cover border-4 border-blue-400 mx-auto block mb-5 cursor-pointer shadow-lg"
            onClick={handlePhotoClick}
        />
        
    );
}