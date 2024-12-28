import React from 'react'

const EventCard = ({ params }) => {
    const { name, totalEvents } = params
    return (
        <div className='border-black border'>
            <div className='border-b-2 p-3 text-white text-2xl bg-slate-600 border-gray-700'>
                {name}
            </div>
            <div className='text-center text-2xl p-3'>
                {totalEvents}
            </div>
        </div>
    )
}

export default EventCard
