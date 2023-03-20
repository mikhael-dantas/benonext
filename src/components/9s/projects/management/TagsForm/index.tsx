import { useState } from 'react';
import { ITag } from 'src/lib/data-structure';

interface ITagFormProps {
  initialValues?: ITag;
  onSubmit: (tag: ITag) => void;
}

const TagForm: React.FC<ITagFormProps> = ({ initialValues, onSubmit }) => {
  const [tag, setTag] = useState<ITag>(initialValues || { id: '', name: '', description: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTag((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(tag);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={tag.name}
          onChange={handleInputChange}
          required
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>

      <div>
        <label htmlFor="description" className="block font-medium mb-1">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={tag.description}
          onChange={handleInputChange}
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>

      <div>
        <label htmlFor="id" className="block font-medium mb-1">
          ID
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={tag.id}
          readOnly
          className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400"
        />
      </div>

      <button type="submit" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
  );
};

export default TagForm;
