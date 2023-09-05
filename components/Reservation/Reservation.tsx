"use client";
import ReservationForm from "./FormReservation";

const Reservation = () => {

    return (
        <section className='w-full'>
            <div className='overflow-x-hidden relative'>
                <div className="flex justify-center items-center m-10">
                    <ReservationForm />
                </div>
            </div>

        </section>
    )

}

export default Reservation;
