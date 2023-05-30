// Composant gérant l'affichage de l'agenda des evenements d'un utilisateur.

import { EventData } from '@/types';
import Card from './Card';

// Typage TypeScript
interface UserAgendaProps {
  events: EventData;
}

export default function UserAgenda({ events }: UserAgendaProps) {
  // Filtrage des événements dont la date/heure de fin est passée
  const upcomingEvents = events.filter((event) => {
    const endingTime = new Date(event.endingTime).getTime();
    return endingTime > Date.now();
  });

  // Tri des événements par ordre de date de début
  const sortedEvents = upcomingEvents.sort((a, b) => {
    const aTime = new Date(a.startingTime).getTime();
    const bTime = new Date(b.startingTime).getTime();
    return aTime - bTime;
  });

  return (
    <div>
      <h2 className="font-bold mb-2">Agenda :</h2>
      {/* On retourne chaque évenement en reprenant les données de events */}
      {sortedEvents.map((event) => (
        <div key={event.id} className="my-7 w-3/6">
          <Card event={event} />
        </div>
      ))}
    </div>
  );
}
