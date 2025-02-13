export function Shape({ size, backgroundColor, borderRadius }) {
    return (
        <div
            style={{
                width: size.width,
                height: size.height,
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
            }}
        />
    );
}
export function TestShape() {
    return (
        <>
            <Shape size={{ width: '150px', height: '150px' }} backgroundColor="blue" borderRadius="20%" />
            <Shape size={{ width: '100px', height: '100px' }} backgroundColor="green" borderRadius="50%" />
            <Shape size={{ width: '200px', height: '200px' }} backgroundColor="yellow" borderRadius="0%" />
        </>
    );
}