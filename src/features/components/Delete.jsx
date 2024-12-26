import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const DeleteModel = ({ openModal, onClose, title, confirm }) => {
  const { t } = useTranslation();
  if (!openModal) return null;
  return (
    <Modal show={openModal} size="md" onClose={onClose} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-yellow-500 dark:text-gray-200" />
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            {t("Are you sure you want to delete this")} {title}?
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={confirm}>
              {"Yes, I'm sure"}
            </Button>
            <Button color="gray" onClick={onClose}>
              {t("No, cancel")}
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

DeleteModel.propTypes = {
  openModal: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  confirm: PropTypes.func,
};

export default DeleteModel;
