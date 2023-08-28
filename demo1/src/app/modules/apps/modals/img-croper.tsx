import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import ReactCrop, {Crop} from '../../../../_metronic/custom/imageCropper'
interface ImgCroperProps {
  show: boolean
  closeModal: () => void
  imageUrl: string
  file: File | null
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSaveCrop: (crop: Crop) => void
  crop: Crop
  setCroppedImageUrl: React.Dispatch<React.SetStateAction<string>>
}
const ImgCroper: React.FC<ImgCroperProps> = ({
  show,
  closeModal,
  imageUrl,
  file,
  handleUpload,
  crop: initialCrop,
  onSaveCrop,
  setCroppedImageUrl,
}) => {
  const [crop, setCrop] = useState<Crop>(initialCrop)
  const handleImageLoaded = (image: HTMLImageElement) => {}
  const handleImageCropped = (completedCrop: Crop) => {
    // setCroppedImageUrl(croppedImageUrl)
  }
  return (
    <>
      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          -
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            // onImageLoaded={handleImageLoaded}
            onComplete={handleImageCropped}
          >
            <img src={imageUrl} alt='Preview' />
          </ReactCrop>
          {/* <img className='object-fit-contain' src={imageUrl} alt={file ? file.name : ''} /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={closeModal}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              closeModal()
              onSaveCrop(crop)
              console.log('Hi from Child')
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ImgCroper
