using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public abstract class Response
    {
    }

    public class SuccessResponse : Response
    {
        public SuccessResponse()
        {

        }
    }

    public class SuccessResponse<TResult> : SuccessResponse
    {
        public SuccessResponse()
        {

        }
        public SuccessResponse(TResult responseData)
        {
            Result = responseData;
        }
        public TResult Result { get; set; }
    }

    public class InvalidResponse : Response
    {

    }
    public class ErrorResponse : Response
    {
        public ErrorResponse() :this(new List<string>())
        {

        }
        public ErrorResponse(List<string> messages)
        {
            Messages = messages;
        }

        public List<string> Messages { get; set; }
    }

    public class ErrorResponse<TResult> : ErrorResponse
    {
        public ErrorResponse():base(new List<string>())
        {
            
        }

        public ErrorResponse(TResult responseData) :base(new List<string>())
        {
            Result = responseData;

        }

        public ErrorResponse(List<string> messages) :base(messages)
        {
            
        }

        public ErrorResponse(TResult responseData, List<string> messages) : base(messages)
        {
            Result = responseData;
            
        }

        public TResult Result { get; set; }
    }
}
