import { ModalOverlay, Modal, ModalContent, ModalHeader, ModalBody, Progress } from "@chakra-ui/react";
import React from "react";

const LoadingModal: React.FC<{
    progress: number,
    isOpen: boolean,
    onClose: () => void,
}> = (props) => {
    return (
        <Modal closeOnOverlayClick={false} isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>ダウンロード中...</ModalHeader>
                <ModalBody padding="3vw">
                    <Progress hasStripe value={props.progress} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};

export default LoadingModal;