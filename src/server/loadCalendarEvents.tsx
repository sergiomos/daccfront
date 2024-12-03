import { FaStar } from "react-icons/fa";

interface eventDays{
    eventId: string
    eventText: string
    eventClass: string
}
interface infoEvents{
    date: Date // data do dia que vai checar
    hoveredEventId: string // Id do evento do dia mostrado
    setHoveredEventId: React.Dispatch<React.SetStateAction<string>>
    eventDays: eventDays[]
}

export default function loadCalendarEvents({ date, hoveredEventId, setHoveredEventId, eventDays }: infoEvents): React.ReactNode {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Soma 1 porque os meses são tratados como array vai de 0 até 11
    const day = date.getDate();

    // id do dia gerado a partir da data que é recebida, usado para procurar nos dados da database o dia, para checar
    // se tem algum evento
    const dayId = `${year}${month > 9 ? month : `0${month}`}${day > 9 ? day : `0${day}`}`;

    // obter evento a ser renderizado
    // futuramente implementar um método de pesquisa mais eficiente, acho pouco provável porque não vai ter muito dado
    const event = eventDays.find( event => event.eventId === dayId);

    // se nao tiver evento no dia retorna null
    if (!event) return null;

    return (
        <div>
            <div
                // seta o id do dia/evento no hoveredEventId se o mouse esta sobre o icone
                onMouseEnter={() => setHoveredEventId(event.eventId)}
                onMouseLeave={() => setHoveredEventId('')}
                // altera a classe caso esteja com hover
            >
                <FaStar/>
            </div>

            {/*Abaixo o texto do evento que irá aparecer, modifique apenas essa div*/}
            <div
                className={hoveredEventId === event.eventId ? event.eventClass : ''}
            >
                {/*Renderiza a mensagem somente se estiver com hover e for a que está com hover atual*/}
                {event.eventId === hoveredEventId && (
                    <div className="calendar-event-text">
                        {event.eventText}
                    </div>
                )}
            </div>
        </div>
    );
}
