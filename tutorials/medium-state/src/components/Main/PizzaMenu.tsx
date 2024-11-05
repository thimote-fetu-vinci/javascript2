import "./PizzaMenu.css";

interface Pizza {
    id: number;
    title: string;
    content: string;
}

interface PizzaMenuProps {
    pizzas: Pizza[];
}

const PizzaMenu = ({ pizzas }: PizzaMenuProps) => {
    return (
        <table className="pizza-menu">
            <thead>
                <tr>
                    <th>Pizza</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {pizzas.map((pizza) => (
                    <tr key={pizza.id}>
                        <td>{pizza.title}</td>
                        <td>{pizza.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export type { Pizza };
export default PizzaMenu;