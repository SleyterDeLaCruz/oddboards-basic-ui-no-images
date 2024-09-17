export interface HeaderProps {
  title: string;
  keyMarkets: string[];
}
export const Header = ({ title = "Oddsboard", keyMarkets }: HeaderProps) => {
  return (
    <header>
      <div>
        <h1>{title}</h1>

      </div>
      <div>
        {keyMarkets?.map((market) => (
          <h4 key={`keymarket-${market}`}>{market}</h4>
        ))}
      </div>
    </header>
  );
};
