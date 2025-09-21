"use client";
interface IProps {
  error: Error;
  reset: () => void;
}

const Error = (props: IProps) => {
  return (
    <div>
      <h3>Opps!! Something goes Wrong</h3>
      <p><small>Error: {props.error.message}</small></p>
    </div>
  )
}

export default Error
