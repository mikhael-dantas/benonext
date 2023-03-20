import { useEffect, useState } from "react";
import { IUseCase, ECurrentState, IFile, ILink, IImage, IModule, ITag, IFunctionalRequirement } from "src/lib/data-structure";

interface IUseCaseFormProps {
  initialValues?: IUseCase;
  onSubmit: (useCase: IUseCase) => void;
}

const UseCaseForm: React.FC<IUseCaseFormProps> = ({ initialValues, onSubmit }) => {
  const [id, setId] = useState(initialValues?.id ?? "");
  const [moduleId, setModuleId] = useState(initialValues?.moduleId ?? "");
  const [tagIds, setTagIds] = useState<string[]>(initialValues?.tagIds ?? []);
  const [name, setName] = useState(initialValues?.name ?? "");
  const [currentState, setCurrentState] = useState<ECurrentState>(initialValues?.currentState ?? ECurrentState.inProgress);
  const [neededFrsToWorkIds, setNeededFrsToWorkIds] = useState<string[]>(initialValues?.neededFrsToWorkIds ?? []);
  const [useCasesPipelineIds, setUseCasesPipelineIds] = useState<string[]>(initialValues?.useCasesPipelineIds ?? []);
  const [relatedFiles, setRelatedFiles] = useState<IFile[]>(initialValues?.relatedFiles ?? []);
  const [relatedLinks, setRelatedLinks] = useState<ILink[]>(initialValues?.relatedLinks ?? []);
  const [relatedImages, setRelatedImages] = useState<IImage[]>(initialValues?.relatedImages ?? []);

  const [relatedLink, setRelatedLink] = useState<string>('');
  const [relatedLinkDescription, setRelatedLinkDescription] = useState<string>('');
  const [relatedImage, setRelatedImage] = useState<string>('');
  const [relatedImageAltText, setRelatedImageAltText] = useState<string>('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const useCase: IUseCase = {
      id,
      moduleId,
      tagIds,
      name,
      currentState,
      neededFrsToWorkIds,
      useCasesPipelineIds,
      relatedFiles,
      relatedLinks,
      relatedImages,
    };
    onSubmit(useCase);
  };

  // Dynamically generate module options for the moduleId dropdown select
  const moduleOptions = [] as JSX.Element[];
  // Replace with actual state containing IModule objects
  const availableModules: IModule[] = [];
  availableModules.forEach((module) => {
    moduleOptions.push(
      <option key={module.id} value={module.id}>
        {module.name}
      </option>
    );
  });

  // Dynamically generate tag options for the tagIds multi-select
  const tagOptions = [] as JSX.Element[];
  // Replace with actual state containing ITag objects
  const availableTags: ITag[] = [
    { id: "1", name: "tag1", description: "tag1 description" },
    { id: "2", name: "tag2", description: "tag2 description" },
  ];
  availableTags.forEach((tag) => {
    tagOptions.push(
      <option key={tag.id} value={tag.id}>
        {tag.name}
      </option>
    );
  });

  // Dynamically generate functional requirement options for the neededFrsToWorkIds multi-select
  const frOptions = [] as JSX.Element[];
  // Replace with actual state containing IFunctionalRequirement objects
  const availableFRs: IFunctionalRequirement[] = [];
  availableFRs.forEach((fr) => {
    frOptions.push(
      <option key={fr.id} value={fr.id}>
        {fr.name}
      </option>
    );
  });

  // Dynamically generate use case options for the useCasesPipelineIds multi-select
  const useCaseOptions = [] as JSX.Element[];
  // Replace with actual state containing IUseCase objects
  const availableUseCases: IUseCase[] = [];
  availableUseCases.forEach((useCase) => {
    useCaseOptions.push(
      <option key={useCase.id} value={useCase.id}>
                {useCase.name}
      </option>
    );
  });








  useEffect(() => {
    console.log(tagIds);
    }, [tagIds]);













  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="moduleId" className="block text-gray-700 font-bold mb-2">
          Module<span className="text-red-500">*</span>
        </label>
        <select
          id="moduleId"
          name="moduleId"
          value={moduleId}
          onChange={(e) => setModuleId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          <option value="">Select a module</option>
          {moduleOptions}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="tagIds" className="block text-gray-700 font-bold mb-2">
          Tags
        </label>
        <select
          id="tagIds"
          name="tagIds"
          value={tagIds}
          onChange={(e) => setTagIds(Array.from(e.target.selectedOptions, (option) => option.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          multiple
        >
          {tagOptions}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="currentState" className="block text-gray-700 font-bold mb-2">
          Current State<span className="text-red-500">*</span>
        </label>
        <select
          id="currentState"
          name="currentState"
          value={currentState}
          onChange={(e) => setCurrentState(e.target.value as ECurrentState)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        >
          {Object.values(ECurrentState).map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="neededFrsToWorkIds" className="block text-gray-700 font-bold mb-2">
          Needed Functional Requirements
        </label>
        <select
          id="neededFrsToWorkIds"
          name="neededFrsToWorkIds"
          value={neededFrsToWorkIds}
          onChange={(e) => setNeededFrsToWorkIds(Array.from(e.target.selectedOptions, (option) => option.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          multiple
        >
          {frOptions}
          </select>
      </div>

      <div className="mb-4">
        <label htmlFor="useCasesPipelineIds" className="block text-gray-700 font-bold mb-2">
          Use Cases Pipeline
        </label>
        <select
          id="useCasesPipelineIds"
          name="useCasesPipelineIds"
          value={useCasesPipelineIds}
          onChange={(e) => setUseCasesPipelineIds(Array.from(e.target.selectedOptions, (option) => option.value))}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          multiple
        >
          {useCaseOptions}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="relatedFiles" className="block text-gray-700 font-bold mb-2">
          Related Files
        </label>
        {relatedFiles.map((file, index) => (
          <div key={file.id} className="flex items-center justify-between mb-2">
            <input
              type="text"
              id={`relatedFile${index}`}
              name={`relatedFile${index}`}
              value={file.name}
              readOnly
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            />
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setRelatedFiles(relatedFiles.filter((_, i) => i !== index));
              }}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <input
            type="file"
            id="relatedFile"
            name="relatedFile"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            onChange={(e) =>
              setRelatedFiles([
                ...relatedFiles,
                { id: Math.random().toString(36).substr(2, 9), name: e.target.files![0].name, file: e.target.files![0] },
              ])
            }
          />
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              document.getElementById("relatedFile")?.click();
            }}
          >
            Add
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="relatedLinks" className="block text-gray-700 font-bold mb-2">
          Related Links
        </label>
        {relatedLinks.map((link, index) => (
          <div key={link.id} className="flex items-center justify-between mb-2">
            <input
              type="text"
              id={`relatedLink${index}`}
              name={`relatedLink${index}`}
              value={link.url}
              onChange={(e) =>
                setRelatedLinks(
                  relatedLinks.map((l, i) => (i === index ? { ...l, url: e.target.value } : l))
                )
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="URL"
            />
            <input
              type="text"
              id={`relatedLinkDescription${index}`}
              name={`relatedLinkDescription${index}`}
              value={link.description}
              onChange={(e) =>
                setRelatedLinks(
                  relatedLinks.map((l, i) =>
                    i === index ? { ...l, description: e.target.value } : l
                  )
                )
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="Description"
            />
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setRelatedLinks(relatedLinks.filter((_, i) => i !== index));
              }}
            >
              Remove
            </button>
          </div>
          ))}
          <div className="flex items-center justify-between">
            <input
              type="text"
              id="relatedLink"
              name="relatedLink"
              value={relatedLink}
              onChange={(e) => setRelatedLink(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="URL"
            />
            <input
              type="text"
              id="relatedLinkDescription"
              name="relatedLinkDescription"
              value={relatedLinkDescription}
              onChange={(e) => setRelatedLinkDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="Description"
            />
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setRelatedLinks([...relatedLinks, { id: Math.random().toString(36).substr(2, 9), url: relatedLink, description: relatedLinkDescription }]);
                setRelatedLink("");
                setRelatedLinkDescription("");
              }}
            >
              Add
            </button>
          </div>
        </div>
  
        <div className="mb-4">
          <label htmlFor="relatedImages" className="block text-gray-700 font-bold mb-2">
            Related Images
          </label>
          {relatedImages.map((image, index) => (
            <div key={image.id} className="flex items-center justify-between mb-2">
              <input
                type="text"
                id={`relatedImage${index}`}
                name={`relatedImage${index}`}
                value={image.url}
                onChange={(e) =>
                  setRelatedImages(
                    relatedImages.map((i, idx) =>
                      idx === index ? { ...i, url: e.target.value } : i
                    )
                  )
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Image URL"
              />
              <input
                type="text"
                id={`relatedImageAltText${index}`}
                name={`relatedImageAltText${index}`}
                value={image.altText}
                onChange={(e) =>
                  setRelatedImages(
                    relatedImages.map((i, idx) =>
                      idx === index ? { ...i, altText: e.target.value } : i
                    )
                  )
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder="Alt Text"
              />
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  setRelatedImages(relatedImages.filter((_, i) => i !== index));
                }}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <input
              type="text"
              id="relatedImage"
              name="relatedImage"
              value={relatedImage}
              onChange={(e) => setRelatedImage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="Image URL"
            />
            <input
              type="text"
              id="relatedImageAltText"
              name="relatedImageAltText"
              value={relatedImageAltText}
              onChange={(e) => setRelatedImageAltText(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
              placeholder="Alt Text"
            />
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setRelatedImages([
                  ...relatedImages,
                  { id: Math.random().toString(36).substr(2, 9), url: relatedImage, altText: relatedImageAltText },
                ]);
                setRelatedImage("");
                setRelatedImageAltText("");
              }}
            >
              Add
            </button>
          </div>
        </div>
  
        <div className="flex items-center justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    );
  };
  

  export default UseCaseForm;