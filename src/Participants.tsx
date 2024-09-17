export interface ParticipantsProps {
  participantA: string;
  participantB: string;
}

export const Participants = ({ participantA, participantB }: ParticipantsProps) => {
  return (
    <div className="participants">
      <div className="team">
        <h2>{participantA}</h2>
      </div>
      <div className="vs">
        vs <hr />
      </div>
      <div className="team">
        <h2>{participantB}</h2>
      </div>
    </div>
  );
};

