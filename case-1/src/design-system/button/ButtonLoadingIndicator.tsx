import { Loader } from '../loader'
import { PropsWithChildren } from "react";

export const ButtonLoadingIndicator = ({ className }: PropsWithChildren<{ className?: string }>) => <Loader {...{ className }} />
