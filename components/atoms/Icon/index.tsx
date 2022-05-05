import IcoMoon from 'react-icomoon';
const iconSet = require('public/icons.json');

const Icon = (props) => {
	return (
		<IcoMoon iconSet={iconSet} {...props} />
	);
}

export default Icon;