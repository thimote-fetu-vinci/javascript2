const list = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

const PersonsList = () => {
    return (
        <table>
            <thead>
                <td>Prénoms</td>
                <td>Ages</td>
            </thead>
            <tbody>
                {list.map(({ name, age }) => (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PersonsList;