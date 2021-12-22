import { useAccordionButton } from "react-bootstrap";

export function AccordionIconButton({ children, onClick })
{
    return (
        <div type="button" onClick={onClick}>
            {children}
        </div>
    );
}

export function CustomToggle({ children, eventKey })
{
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <div type="button" onClick={decoratedOnClick}>
            {children}
        </div>
    );
}