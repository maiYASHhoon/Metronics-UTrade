import React, {useState, useRef} from 'react'
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
  const [aspectRatio, setAspectRatio] = useState<number | undefined>(16/9)
  const handleImageLoaded = (image: HTMLImageElement) => {}
  const imageRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [croppedImage, setCroppedImage] = useState<string>('')
  const handleImageCropped = (completedCrop: Crop) => {
    if (!canvasRef.current || !imageRef.current) {
      return
    }
    const canvas = canvasRef.current
    const {x, y, width, height} = completedCrop
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.drawImage(imageRef.current, x, y, width, height, 0, 0, width, height)
      const croppedImageUrl = canvas.toDataURL()
      setCroppedImageUrl(croppedImageUrl)
    }
  }
  
  return (
    <>
      <Modal show={show} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Image Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactCrop
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={handleImageCropped}
            aspect={aspectRatio}
          >
            <img ref={imageRef} src={imageUrl} alt='Preview' />
          </ReactCrop>
          <canvas ref={canvasRef} style={{display: 'none'}} />
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
