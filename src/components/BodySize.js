import React from 'react';

import '../assets/style/BodySize.css';

function BodySize () {
    // const [selectedBodySize, setSelectedBodySize] = useState('');

    // const BodySizes = [
    //     { value: 'XXS', label: 'XXS' },
    //     { value: 'XS', label: 'XS' },
    //     { value: 'S', label: 'S' },
    //     { value: 'M', label: 'M' },
    //     { value: 'L', label: 'L' },
    //     { value: 'XL', label: 'XL' }
    // ];

    // const handleBodySizeClick = (value) => {
    //     setSelectedBodySize(value);
    // };

    return (
        <div className='mr-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg '>
            <select id="countries" className="focus:ring-blue-500 focus:border-blue-500 block w-full">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
}

export default BodySize;
