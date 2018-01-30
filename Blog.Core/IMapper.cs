using System;
using System.Collections.Generic;
using System.Text;

namespace Blog.Core
{
    public interface IMapper<T1, T2> where T1 : class where T2 : class
    {
        T1 Map(T2 source);
        T2 Map(T1 source);
        IEnumerable<T1> Map(IEnumerable<T2> source);
        IEnumerable<T2> Map(IEnumerable<T1> source);
    }
}
