'use client';

import Calendar from "react-calendar";
import loadCalendarEvents from '@/server/loadCalendarEvents'
import '@/components/calendar/calendar.css'
import React from 'react'

export default function CalendarEvents(): React.ReactNode {
    // salvar qual dia/evento está com hover
    const [hoveredEventId, setHoveredEventId] = React.useState<string>('');

    // criar data maxima do calendario
    const maxDate = new Date(); // definir atual +1 ano como max
    maxDate.setFullYear(maxDate.getFullYear() + 1); // somar mais um ano

    // criar data minima do calendario
    const minDate =  new Date();
    // dia do inicio do dacc
    minDate.setFullYear(2023);
    minDate.setMonth(9);
    minDate.setDate(24);

    // Meros exemplos, no caso terá uma database com isso armazenado e iremos usar uma função no server
    // para puxar os dados, essa variável fica aqui armazenada porque se colocar no load irá ter que pegar
    // todos os dados da database toda vez que renderizar um dia, então aqui deixa mais eficiente
    const eventDays = [
        {eventId: '20241201', eventText: 'Evento do DACC dia 01/12/2025 muito legal', eventClass: 'show-calendar-event-text'},
        {eventId: '20231201', eventText: 'Dia do A', eventClass: 'show-calendar-event-text'},
        {eventId: '20231202', eventText: 'Dia do H', eventClass: 'show-calendar-event-text'},
        {eventId: '20241104', eventText: 'Dia do E', eventClass: 'show-calendar-event-text'},
        {eventId: '20241003', eventText: 'Dia do S', eventClass: 'show-calendar-event-text'},
        {eventId: '20240907', eventText: 'Dia do T', eventClass: 'show-calendar-event-text'},
        {eventId: '20241204', eventText: 'Dia do U', eventClass: 'show-calendar-event-text'},
        {eventId: '20241207', eventText: 'Dia do G', eventClass: 'show-calendar-event-text'}
    ]

    return (
        <div>
            <Calendar
                locale={'pt-BR'}
                tileContent={({ date }) => loadCalendarEvents({
                    date, hoveredEventId, setHoveredEventId: setHoveredEventId, eventDays})
                }
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
}
