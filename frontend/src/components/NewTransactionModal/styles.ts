import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';


interface TransactionTypeButtonProps {
    variant: 'income' | 'outcome';
}

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, .75);
`;

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 32rem;
    border-radius: 8px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};


    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 8px;
            border: 0;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme['gray-500']};
            }
        }

        button[type="submit"] {
            height: 3rem;
            border: 0;
            border-radius: 8px;
            padding: 0 1.25rem;
            margin-top: 1.5rem;
            cursor: pointer;

            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme['gray-100']};
            font-weight: bold;

            &:disabled {
                opacity: .5;
                cursor: not-allowed;
            }
            
            &:not(:disabled):hover {
                background-color: ${props => props.theme['green-700']};
                transition: background-color .2s;
            }
        }
    }
`;


export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: .5rem;
`;

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    background-color: ${props => props.theme['gray-700']};
    color: ${props => props.theme['gray-300']};
    padding: 1rem;
    gap: .5rem;
    border: 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        color: ${props => props.variant == 'income' ? props.theme['green-300'] : props.theme['red-300']};
    }

    &[data-state='unchecked']:hover {
        background-color: ${props => props.theme['gray-600']};
        transition: background-color .2s;
    }

    &[data-state='checked'] {
        background-color: ${props => props.variant == 'income' ? props.theme['green-500'] : props.theme['red-500']};
        color: ${props => props.theme['gray-100']};

        svg {
            color: ${props => props.variant == 'income' ? props.theme['gray-100'] : props.theme['gray-100']};
        }
    }
`;


export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    line-height: 0;
    background-color: transparent;
    cursor: pointer;
    

    color: ${props => props.theme['gray-500']};
`;