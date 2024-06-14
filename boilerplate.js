/**
 * Header component for the application.
 * @param {Object} props - Component properties.
 * @param {Function} props.onSave - Function to handle save action.
 * @param {Function} props.onLoad - Function to handle load action.
 * @param {Function} props.onDelete - Function to handle delete action.
 * @param {Function} props.onLogout - Function to handle logout action.
 * @returns {JSX.Element} The rendered component.
 */
const Header = ({ onSave, onLoad, onDelete, onLogout }) => (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <i className="fas fa-th-large text-purple-700 text-2xl"></i>
            <span className="text-2xl font-semibold text-purple-700">Hey John, welcome to Splashscript</span>
        </div>
        <div className="flex items-center space-x-4">
            <Button onClick={onSave} color="green" icon="save" text="Save" />
            <Button onClick={onLoad} color="blue" icon="upload" text="Load" />
            <Button onClick={onDelete} color="red" icon="trash" text="Delete" />
            <button onClick={onLogout} className="text-gray-700 hover:text-gray-900 transition flex items-center">
                <i className="fas fa-sign-out-alt text-2xl"></i>
            </button>
        </div>
    </div>
);

/**
 * Button component for the application.
 * @param {Object} props - Component properties.
 * @param {Function} props.onClick - Function to handle button click.
 * @param {string} props.color - Button color.
 * @param {string} props.icon - FontAwesome icon class.
 * @param {string} props.text - Button text.
 * @returns {JSX.Element} The rendered component.
 */
const Button = ({ onClick, color, icon, text }) => (
    <button
        onClick={onClick}
        className={`bg-${color}-500 hover:bg-${color}-600 transition text-white py-2 px-5 rounded shadow flex items-center`}
    >
        <i className={`fas fa-${icon} mr-2`}></i>
        {text}
    </button>
);

/**
 * VersionItem component to display version history.
 * @param {Object} props - Component properties.
 * @param {string} props.version - Version number.
 * @param {string} props.description - Version description.
 * @returns {JSX.Element} The rendered component.
 */
const VersionItem = ({ version, description }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex-1">
                <div className="font-bold">{version}</div>
                <div className={`text-sm ${expanded ? '' : 'truncate'}`}>{description}</div>
            </div>
            <button onClick={() => setExpanded(!expanded)} className="text-blue-500 text-sm ml-2">
                {expanded ? 'Less' : 'More'}
            </button>
        </div>
    );
};
/**
 * Sidebar component for the application.
 * @param {Object} props - Component properties.
 * @param {Function} props.handleUpdate - Function to handle update action.
 * @param {Function} props.handleScaffold - Function to handle scaffold action.
 * @param {Function} props.handleRegenerate - Function to handle regenerate action.
 * @returns {JSX.Element} The rendered component.
 */
const Sidebar = ({ handleUpdate, handleScaffold, handleRegenerate }) => {
    const [inputText, setInputText] = React.useState("");

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleUpdateClick = () => {
        handleUpdate(inputText);
    };

    return (
        <div className="w-1/4 p-8">
            <h1 className="text-2xl font-semibold mb-4">Demo Space</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Tell the AI what to change:</label>
                <textarea
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    rows="4"
                    placeholder="Describe the changes you want..."
                    value={inputText}
                    onChange={handleInputChange}
                ></textarea>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Version History</h2>
                <div className="border border-gray-300 rounded p-4 bg-gray-50">
                    <VersionItem version="Version 1.0" description="Initial release" />
                    <VersionItem version="Version 1.1" description="Bug fixes" />
                    <VersionItem version="Version 1.2" description="Performance improvements" />
                </div>
            </div>
            <div className="mt-8">
                <button onClick={handleUpdateClick} className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-4">Update</button>
                <div className="flex space-x-4">
                    <button onClick={handleScaffold} className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-1/2">Scaffold</button>
                    <button onClick={handleRegenerate} className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-1/2">Regenerate</button>
                </div>
            </div>
        </div>
    );
};

