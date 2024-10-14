import SubmitButton from '@/components/submitButton'
export default function uploadForm() {
  return (
    <form>
        <div  className="mb-4 w-10/12 mx-auto">
        <div className="mb-4 pt-2">
            <input
            type="file"
            name="image"
            className="file:py-2 file:px-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-200 file:cursor-pointer"
            />
        </div>
        <SubmitButton label="submit Form"/>
        </div>
    </form>
  )
}
