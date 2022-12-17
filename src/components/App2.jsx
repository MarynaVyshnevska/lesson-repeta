
import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../components/upcoming-events.json';

export const App2 = () => {
    return (
        <>
            <PageTitle text="24th Core World Coalition Conference" />
            <EventBoard events={upcomingEvents}/>
        </>
    );
};