using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class Response
    {
    }

    public class SuccessResponse : Response
    {

    }

    public class SuccessResponse<TResult> : SuccessResponse
    {
        public TResult Result { get; set; }
    }

    public class InvalidResponse : Response
    {

    }
    public class ErrorResponse : Response
    {
        public string [] Messages { get; set; }
    }

    public class ErrorResponse<TResult> : ErrorResponse
    {
        public TResult Result { get; set; }
    }
}
