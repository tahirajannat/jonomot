/* eslint-disable react/prop-types */
export default function ProgressBarAfterVote({
    completedPercentage = '10%',
    stats,
    styles,
    index,
    id,
    className,
    percentageColor,
    progressbarColor,
}) {
    const progressBarStyles = {
        width: completedPercentage,
        ...styles, // Merge custom styles with width
    };
    // Function to determine the progress bar color based on index
    const getProgressBarColor = (index) => {
        const colors = [
            'bg-dark',
            'bg-primary',
            'bg-orange-500',
            'bg-indigo-600',
        ];

        return colors[index % 4];
    };
    const getPercentageColor = (index) => {
        const percentageColors = [
            'text-dark',
            'text-primary',
            'text-orange-500',
            'text-indigo-600',
        ];
        return percentageColors[index % 4];
    };

    return (
        <div className='flex space-x-3 w-full sm:my-0.5'>
            {/* <input
                type='checkbox'
                className='h-5 w-5 text-blue-500 focus:ring-blue-400 mt-1 text-ne'
                disabled
            /> */}
            <div className={`w-full `}>
                <div className='flex justify-between mb-1 text-gray-700'>
                    <span className='text-xs sm:text-base lg:text-lg'>
                        {stats}
                    </span>
                    <span
                        className={`text-xs sm:text-base lg:text-lg ${percentageColor}`}
                    >
                        {completedPercentage}
                    </span>
                </div>
                <div className='h-2.5 w-full bg-gray-200 rounded'>
                    <div
                        style={progressBarStyles}
                        className={`h-2.5 rounded ${progressbarColor}`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
