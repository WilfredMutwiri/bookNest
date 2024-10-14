import {useFormStatus} from 'react-dom'
export default function submitButton({label}){
  const {pending}=useFormStatus();
  return (
    <button type="submit" className="bg-gray-500 w-52 rounded-md text-white p-2 shadow-sm">
      {
        label==="upload"?(
          <>{pending ? "uploading...":"upload"}</>
        ):(
          <>{pending ? "updating...":"update"}</>
        )
      }
    </button>
  )
}
