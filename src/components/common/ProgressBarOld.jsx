/* eslint-disable react/prop-types */
export default function ProgressBarOld({
    completedPercentage = '10%',
    stats,
    styles,
    isChecked,
    onCheckboxChange,
}) {
    const progressBarStyles = {
        width: completedPercentage,
        ...styles, // Merge custom styles with width
    };
    // Function to determine the progress bar color based on index
    const getProgressBarColor = (index) => {
        const colors = [
            'bg-red-500',
            'bg-orange-500',
            'bg-blue-500',
            'bg-green-500',
        ];
        return colors[index % 4]; // Cycle through the 4 colors
    };

    return (
        <div className='my-4 flex space-x-3'>
            <input
                type='checkbox'
                className='h-5 w-5 text-blue-500 focus:ring-blue-400 mt-1'
                checked={isChecked}
                onChange={onCheckboxChange}
            />
            {isChecked && <span className='text-green-500 text-lg'>✔</span>}
            <div className='w-full'>
                <h3 className='flex justify-between mb-2'>
                    <span>{stats}</span>
                    <span>{completedPercentage}</span>
                </h3>
                <div className='h-2.5 w-full bg-neutral-200'>
                    <div
                        style={progressBarStyles}
                        className={`h-2.5 rounded ${getProgressBarColor()}`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
