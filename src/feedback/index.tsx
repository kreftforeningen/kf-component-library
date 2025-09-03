import * as React from "react";

import { Button } from "@/button";
import { Textarea } from "@/textarea";
import { Label } from "@/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/card";

import { cn } from "@/lib/utils";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

type FeedbackType = "positive" | "negative" | null;

const feedbackContext = React.createContext<{
  feedback: FeedbackType;
  setFeedback: (feedback: FeedbackType) => void;
  commentText: string;
  setCommentText: (value: string) => void;
}>({
  feedback: null,
  setFeedback: () => {},
  commentText: "",
  setCommentText: () => {},
});

function Feedback({ children }: React.ComponentProps<"div">) {
  const [feedback, setFeedback] = React.useState<FeedbackType>(null);
  const [commentText, setCommentText] = React.useState<string>("");

  return (
    <feedbackContext.Provider
      value={{ feedback, setFeedback, commentText, setCommentText }}
    >
      <Card data-slot="feedback" className="flex flex-col gap-4">
        {children}
      </Card>
    </feedbackContext.Provider>
  );
}

function FeedbackHeader({ ...props }: React.ComponentProps<"div">) {
  return <CardHeader {...props} />;
}

function FeedbackTitle({ ...props }: React.ComponentProps<"h3">) {
  return <CardTitle className="mt-0" {...props} />;
}

function FeedbackDescription({ ...props }: React.ComponentProps<"div">) {
  return <CardDescription className="text-base pb-0" {...props} />;
}

function FeedbackAction({ ...props }: React.ComponentProps<"div">) {
  return <CardAction {...props} />;
}

function FeedbackButtons({ className, children }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-row gap-2 my-2", className)}>{children}</div>
  );
}

function FeedbackContent({ ...props }: React.ComponentProps<"div">) {
  return <CardContent className="flex flex-col gap-4" {...props} />;
}

function FeedbackButtonPositive({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { feedback, setFeedback } = React.useContext(feedbackContext);
  const isActive = feedback === "positive";
  return (
    <Button
      variant="outline"
      className={cn(
        isActive ? "outline bg-blue-700 text-white" : "outline bg-transparent",
        className
      )}
      aria-pressed={isActive}
      onClick={() => setFeedback("positive")}
    >
      <ThumbsUpIcon size={30} />
      <span>{children || "Positive"}</span>
    </Button>
  );
}
function FeedbackButtonNegative({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { feedback, setFeedback } = React.useContext(feedbackContext);
  const isActive = feedback === "negative";
  return (
    <Button
      variant="outline"
      className={cn(
        isActive ? "outline bg-blue-700 text-white" : "outline bg-transparent",
        className
      )}
      aria-pressed={isActive}
      onClick={() => setFeedback("negative")}
    >
      <ThumbsDownIcon size={30} />
      <span>{children || "Negative"}</span>
    </Button>
  );
}

function FeedbackComment({ children }: React.ComponentProps<"div">) {
  const { feedback } = React.useContext(feedbackContext);
  if (feedback === null) return null;
  return (
    <div className="flex flex-col gap-4 items-start animate-in fade-in-0 duration-200">
      {children}
    </div>
  );
}

function FeedbackCommentInput({
  className,
  label,
  placeholder,
}: React.ComponentProps<"div"> & { label?: string; placeholder?: string }) {
  const { commentText, setCommentText } = React.useContext(feedbackContext);
  return (
    <div
      className={cn("text-base flex flex-col gap-4 w-full sm:w-2/3", className)}
    >
      <Label>{label || "Comment"}</Label>
      <Textarea
        placeholder={placeholder || "Enter your comment here"}
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
    </div>
  );
}
function FeedbackSubmit({
  className,
  children,
}: React.ComponentProps<"button"> & { children?: string }) {
  const { commentText } = React.useContext(feedbackContext);
  const isDisabled = commentText.trim().length === 0;
  return (
    <Button
      variant="default"
      className={cn("", className)}
      disabled={isDisabled}
    >
      {children || "Submit"}
    </Button>
  );
}

export {
  Feedback,
  FeedbackHeader,
  FeedbackTitle,
  FeedbackDescription,
  FeedbackAction,
  FeedbackButtons,
  FeedbackContent,
  FeedbackComment,
  FeedbackCommentInput,
  FeedbackButtonPositive,
  FeedbackButtonNegative,
  FeedbackSubmit,
};
