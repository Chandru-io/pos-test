import React, { useContext, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { PiClockUser } from "react-icons/pi";
import { RiDraftFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { IoMdExit, IoMdPrint } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { IoIosLaptop } from "react-icons/io";
import { BsCardChecklist } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegRegistered } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { RiFullscreenLine } from "react-icons/ri";
import DraftSales from "./components/draftSales/DraftSales";
import RecentSales from "./components/RecentSale";
import OnlineOrders from "./components/onlineorder/OnlineOrders";
import ReservationPopup from "./components/reservavationlist/ReservationPopup";
import InvoiceComponent from "./components/InvoicePrint";
import NotificationList from "./components/NotificationList";
import RegisterReport from "./components/Register";
import CustomerDisplay from "./components/CustomerDisplay";
import OrderStatusScreen from "./components/OrderStatusScreen";
import { Modal } from "flowbite-react";
import { SidebarContext } from "../../../layout/Layout";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const { setHideSideBar, hideSidebar } = useContext(SidebarContext);
  const [openModal, setOpenModal] = useState(null);
  const { t } = useTranslation();
  const handleOpenModal = (modalName) => setOpenModal(modalName);
  const handleCloseModal = () => setOpenModal(null);

  const handleShowFullScreen = () => {
    setHideSideBar(!hideSidebar);
  };

  const handleHideFullScreen = () => {
    const element = document.documentElement;

    if (
      document.fullscreenElement ||
      document.mozFullScreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      // Update fullscreen state
      setIsFullScreen(false);
    } else {
      // Enter fullscreen
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
      // Update fullscreen state
      setIsFullScreen(true);
    }
  };

  const NAVBAR_ITEMS = [
    {
      title: "Panels.Menu items",
      icon: IoMenuOutline,
      fn: handleShowFullScreen,
    },
    { title: "Panels.Shift", icon: PiClockUser },
    {
      title: "Panels.Draft Sales",
      icon: RiDraftFill,
      component: DraftSales,
      size: "7xl",
    },
    { title: "Panels.Language", icon: GrLanguage },
    {
      title: "Panels.Recent Sales",
      icon: FaArrowRotateLeft,
      component: RecentSales,
      size: "7xl",
    },
    {
      title: "Panels.Online Orders",
      icon: IoIosLaptop,
      component: OnlineOrders,
      size: "7xl",
    },
    {
      title: "Panels.Reservation List",
      icon: BsCardChecklist,
      component: ReservationPopup,
      size: "7xl",
    },
    {
      title: "Panels.Print Last Invoice",
      icon: IoMdPrint,
      component: InvoiceComponent,
    },
    {
      title: "Panels.Kitchen Notification",
      icon: IoMdNotificationsOutline,
      component: NotificationList,
    },
    {
      title: "Panels.Register",
      icon: FaRegRegistered,
      component: RegisterReport,
      size: "5xl",
    },
    { title: "Panels.Dashboard", icon: MdOutlineDashboard },
    {
      title: "Panels.Customer Display",
      icon: RiComputerLine,
      component: CustomerDisplay,
      size: "4xl",
    },
    {
      title: "Panels.Order Status Screen",
      icon: HiMiniComputerDesktop,
      component: OrderStatusScreen,
      size: "7xl",
    },
    {
      title: isFullScreen ? "Panels.Exit Full Screen" : "Panels.Full Screen",
      icon: RiFullscreenLine,
      fn: handleHideFullScreen,
    },
    { title: "Panels.Log Out", icon: IoMdExit },
  ];

  const handleDefaultClick = () => {
    console.log("No action defined for this item.");
  };

  return (
    <nav className="bg-white p-2 shadow-md flex items-center">
      <div className="flex justify-around items-center w-full">
        {NAVBAR_ITEMS.map(
          ({ title, icon: Icon, component: Component, fn, size }, index) =>
            Component ? (
              // Items with modals
              <React.Fragment key={index}>
                {/* Trigger Button */}
                <div
                  className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-100 duration-200 p-1 rounded-sm"
                  onClick={() => handleOpenModal(title)}
                >
                  <Icon className="text-xl mb-1" />
                  <span className="text-xs">{t(title)}</span>
                </div>

                {/* Modal */}
                <Modal
                  show={openModal === title}
                  size={size}
                  popup
                  onClose={handleCloseModal}
                >
                  <Modal.Header />
                  <Modal.Body>
                    <Component />
                  </Modal.Body>
                </Modal>
              </React.Fragment>
            ) : (
              // Items without modals
              <div
                key={index}
                className="flex flex-col items-center text-center cursor-pointer hover:bg-slate-100 duration-200 p-1 rounded-sm"
                onClick={fn || handleDefaultClick}
              >
                <Icon className="text-xl mb-1" />
                <span className="text-xs">{t(title)}</span>
              </div>
            )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
