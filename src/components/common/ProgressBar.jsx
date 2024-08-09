/* eslint-disable react/prop-types */
export default function ProgressBar({
    completedPercentage = '10%',
    stats,
    styles,
}) {
    const progressBarStyles = {
        width: completedPercentage,
        ...styles, // Merge custom styles with width
    };

    return (
        <div className='my-4'>
            <h3 className='flex justify-between mb-2'>
                <span>{stats}</span>
                <span>{completedPercentage}</span>
            </h3>
            <div className='h-1 w-full bg-neutral-200'>
                <div
                    style={progressBarStyles}
                    className='h-1 bg-green-500'
                ></div>
            </div>
        </div>
    );
}
