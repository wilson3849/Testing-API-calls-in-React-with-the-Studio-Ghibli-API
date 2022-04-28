const Header : React.FC<{PageNo:number}> = ({PageNo}) =>
    <header>
        <div>Ghibli Studio Films</div>
        <div>Page : {PageNo}</div>
    </header>;
export default Header;