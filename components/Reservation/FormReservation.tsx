'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type FormData = {
    startDate: Date;
    endDate: Date;
};

const FormSchema = z.object({
    startDate: z.date(),
    endDate: z.date(),
});

function ReservationForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {

        alert(JSON.stringify(data)); // Dodałem tę linię
    };

    return (
        <div className='m-2 w-fit bg-stone-200 rounded-xl shadow-xl'>
            <h2 className='text-center bg-[#1e3655] w-full text-white p-4 rounded-t-xl'>Sprawdź dostępność i cenę</h2>
            <form className='flex p-10 pt-2 flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col md:flex-row p-2 gap-2 justify-center items-center w-fit'>
                    <div className=''>
                        <label>Początek przygody*</label>
                        <Controller
                            name="startDate"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <div>
                                    <DatePicker
                                        selected={field.value}
                                        onChange={date => field.onChange(date)}
                                        placeholderText="Wybierz datę rozpoczęcia"
                                        className='bg-secondary text-white placeholder:text-white rounded-xl p-2 w-[250px]'
                                    />
                                </div>
                            )}
                        />
                    </div>
                    <div className=''>
                        <label>Koniec Wyprawy*</label>
                        <Controller
                            name="endDate"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <div>
                                    <DatePicker
                                        selected={field.value}
                                        onChange={date => field.onChange(date)}
                                        placeholderText="Wybierz datę zakończenia"
                                        
                                        className='bg-secondary text-white placeholder:text-white rounded-xl p-2 w-[250px] z-20'
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
                <button className="self-center w-full bg-primary rounded-full p-2 text-white px-10 mt-4 shadow-xl" type="submit">Sprawdź</button>
            </form>
        </div>
    );
}

export default ReservationForm;
