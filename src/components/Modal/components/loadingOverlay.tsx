import { motion } from "framer-motion";
import { Loading } from "../../Loading";

export default function LoadingOverlay(props: {
  isLoading?: boolean;
  containerArea: {
    w: string;
    h: string;
  };
}) {
  return (
    <motion.div
      animate={
        props.isLoading
          ? {
              display: "block",
              opacity: 1,
              zIndex: 1,
            }
          : {
              opacity: 0,
              transitionEnd: {
                zIndex: -1,
                display: "none",
              },
            }
      }
      className="absolute bg-white/75"
      style={{
        height: props.containerArea.h,
        width: props.containerArea.w,
      }}
    >
      <div className="flex flex-row items-center h-full justify-center">
        <div className="bg-white border w-20 h-20 rounded-xl p-2 flex flex-col justify-center items-center top-1/2 left-1/2">
          <Loading size="xl" />
        </div>
      </div>
    </motion.div>
  );
}
