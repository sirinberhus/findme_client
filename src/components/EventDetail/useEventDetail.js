import { useState, useEffect } from 'react';
import { events } from './eventData';

const useEventDetail = (eventId) => {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventDetail = async () => {
            try {
                const event = events.find(event => event.id === parseInt(eventId));
                if (event) {
                    setEvent(event);
                } else {
                    setError('Event not found');
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchEventDetail();
    }, [eventId]);

    return { event, loading, error };
};

export default useEventDetail;
